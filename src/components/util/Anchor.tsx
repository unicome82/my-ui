import { useState, useEffect } from 'react';

interface AnchorProps {
  items?: { id: string; name: string }[];
  top?: string; // 상단 여백(px, rem 등)
}

const Anchor = ({ items, top = '0px' }: AnchorProps) => {
  const [sections, setSections] = useState<{ id: string; name: string }[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (items && items.length > 0) {
      setSections(items);
    } else {
      const sectionElements = Array.from(document.querySelectorAll('section[id]'));
      const found = sectionElements.map((el) => ({
        id: el.id,
        name:
          el.getAttribute('data-anchor-name') ||
          el.querySelector('h2, h3, h4')?.textContent ||
          el.id,
      }));
      setSections(found);
    }
  }, [items]);

  useEffect(() => {
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${top} 0px -60% 0px`, // top 여백만큼 감지 보정
        threshold: 0,
      }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections, top]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - parseInt(top);
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <article className="anchor" style={{ top }}>
      <ul className="anchor-list">
        {sections.map((sec) => (
          <li key={sec.id}>
            <button
              onClick={() => handleClick(sec.id)}
              className={`btn-anchor ${activeId === sec.id ? 'current' : ''}`}
            >
              {sec.name}
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Anchor;
