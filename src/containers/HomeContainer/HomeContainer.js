import React, { useReducer } from 'react';
import "./styles.scss";
import HomeComponent from "../../components/HomeComponent";

const HomeContainer = () => {
    const [isMaximized, setIsMaximized] = useReducer(
        (state, newState) => ({ ...state, ... newState }),
        {
            firstImage: false,
            secondImage: false,
            thirdImage: false,
            fourthImage: false
        }
    );

    console.log(isMaximized);

    const {
        firstImage,
        secondImage,
        thirdImage,
        fourthImage
    } = isMaximized;

    const handleClick = (image, value) => {
        console.log(value);
        setIsMaximized({ ...isMaximized, [image]: value })
    }
    return (
        <div className="homeContainer">
            <HomeComponent 
                firstImage={firstImage}
                secondImage={secondImage}
                thirdImage={thirdImage}
                fourthImage={fourthImage}
                handleClick={handleClick}
            />
        </div>
    );
}

export default HomeContainer;