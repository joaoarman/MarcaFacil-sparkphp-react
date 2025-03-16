import React from 'react'

const useMobile = (media) => {

    const [isMobile, setIsMobile] = React.useState(null);


    React.useEffect(() => {

        function changeMatch() {
            const {matches} = window.matchMedia(`(max-width: ${media})`);
            setIsMobile(matches)
        }
        
        changeMatch();
        
        window.addEventListener('resize', changeMatch)

        return () => {
            window.removeEventListener('resize', changeMatch);
        }
    }, []);
    

    return isMobile
}

export default useMobile
