import React, { createContext, useState, useContext,useEffect,useCallback, useRef } from 'react';

 const H2Context = createContext({
  h2Elements: [],
  firstInViewH2: null
});

 const H2Provider = ({ children }) => {
  const [h2Elements, setH2Elements] = useState([]);
  const [firstInViewH2, setFirstInViewH2] = useState(null);

  return (
    <H2Context.Provider value={{ h2Elements, setH2Elements, firstInViewH2, setFirstInViewH2 }}>
      {children}
    </H2Context.Provider>
  );
};

const H2Component = ({ children }) => {
  
  const { setH2Elements, setFirstInViewH2 } = useContext(H2Context);
  
  const h2Ref = useRef(null);

  useEffect(() => {
    if (h2Ref.current) {
      setH2Elements(prevElements => [...prevElements, h2Ref.current]);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 当元素进入视口时，更新当前视口中的第一个h2元素
          setFirstInViewH2(entry.target);
        } else {
          // 当元素离开视口时，如果它是当前视口中的第一个h2元素，则需要更新
          if (children.firstInViewH2 === entry.target) {
            const newFirstInView = Array.from(children.h2Elements)
              .find(el => el.offsetTop < entry.target.offsetTop + entry.target.offsetHeight);

            setFirstInViewH2(newFirstInView || null);
          }
        }
      });
    }, { rootMargin: '0px', threshold: 0.1 });

    if (h2Ref.current) {
      observer.observe(h2Ref.current);
    }

    return () => observer.disconnect();
  }, [children.firstInViewH2, children.h2Elements, setFirstInViewH2]);

  return <h2 ref={h2Ref}>{children}</h2>;
};


 const H2DisplayComponent = () => {
  const { h2Elements, firstInViewH2 } = useContext(H2Context);
  const isElementFirstInView = useCallback(
    (element) => element === firstInViewH2,
    [firstInViewH2]
   );
   
  const middleIndex = Math.floor(h2Elements.length / 2);
  return (
    <div id='TOC'>
      <div ><b>本文档</b></div>
      {h2Elements.map((element, index) => (
        <li
          key={element.id || index}
          className={index >= middleIndex ? 'hidden' : ''}
        style={{ color: isElementFirstInView(element) ? 'blue' : 'black' }}
        dangerouslySetInnerHTML={{ __html: element.innerHTML }}
        />
      ))}
    </div>
  );
};
export { H2Provider, H2Component, H2DisplayComponent };