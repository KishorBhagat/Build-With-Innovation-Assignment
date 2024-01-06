import styled from "styled-components"
import IconStar from "../icons/IconStar"
import IconStarFill from "../icons/IconStarFill"
import IconStarHalf from "../icons/IconStarHalf"

function StarRating({ id, rating }) {

    let fullFilledStars = Math.floor(Number(rating))
    let decimalRating = (Number(rating) - Math.floor(Number(rating))).toFixed(1)
    let decimalStar = decimalRating >= 0.3 ? 1 : 0;
    let unfilledStars = 5 - (fullFilledStars + decimalStar)

    return (
        <StyledStarRating className="star-rating">
            <span>{rating}</span>
            {
                Array.from({ length: fullFilledStars }, (_, idx) => {
                    return <IconStarFill key={`filled-star-${id}-${idx}`}/>
                })
            }
            {
                Array.from({ length: decimalStar }, (_, idx) => {
                    return (
                        decimalRating < 0.8 ? 
                        <IconStarHalf key={`decimal-full-star-${id}-${idx}`}/>
                         : 
                        <IconStarFill key={`decimal-full-star-${id}-${idx}`}/>
                    )
                })
            }
            {
                Array.from({ length: unfilledStars }, (_, idx) => {
                    return <IconStar key={`unfilled-star-${id}-${idx}`}/>
                })
            }
        </StyledStarRating>
    )
}

const StyledStarRating = styled.div`
    span{
        margin-right: 5px;
        font-size: 13px;
    }
    svg{
        height: 14px;
        color: #ff6f00;
    }
`

export default StarRating