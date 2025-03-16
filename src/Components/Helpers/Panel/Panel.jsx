import React, { Children } from 'react'
import { FaUser, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import './Panel.css'

const Panel = ({ children }) => {

    const [isOpen, setIsOpen] = React.useState(false)
    const [height, setHeight] = React.useState(0);
    const contentRef = React.useRef(null);
    
    let header = null;
    let content = null;

    React.Children.forEach(children, child => {
        if (!React.isValidElement(child)) return;

        if (child.type === Panel.Header) {
          header = child;
        }

        if (child.type === Panel.Content) {
          content = child;
        }

    });

    React.useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? contentRef.current.scrollHeight : 0);
        }
    }, [isOpen]);



    return (
        <div className='panel'>
            <div className="panel-header">
                <div>
                    {header}
                </div>
                <div className="panel-header-icon" onClick={() => setIsOpen(!isOpen)}>
                    {<FaAngleDown className={isOpen ? 'rotate' : ''} />}
                </div>
            </div>
            <div
                className={`panel-content ${isOpen ? 'open' : ''}`}
                style={{ maxHeight: `${height}px` }} 
                ref={contentRef}
            >
                {content}
            </div>
        </div>
    )
}

// Define o subcomponente Header
Panel.Header = ({ children }) => {
    return (
      <>
        {children}
      </>
    );
};

// Define o subcomponente Content
Panel.Content = ({ children }) => {
    return (
      <>
        {children}
      </>
    );
};

export default Panel
