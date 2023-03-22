import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Modal from './Modal';
import { Rating } from 'react-simple-star-rating';


export default function RatingModal() {
    const button = 'Rate Me!'
    const ratingTitle = 'Rate This Book:'
    const rateIt = 'Rate It!'

    // rating state has information
    const [rating, setRating] = useState(0)
  
        const handleRating = (rate: number) => {
          setRating(rate)
        }
        const onPointerMove = (value: number, index: number) => console.log(value, index)

        const styles = {
          display: 'flex',
          flexDirection: 'row'
        }
      
    const saveRating = () => {

    }
    return(
        <>
            <Modal
                buttonName={button}
                modalTitle={ratingTitle}
                modalFunction={rateIt}
                modalInformation={() => (
                <div 
                style={{
                  display: 'inline'
                }}
                >
                  <Rating
                    onClick={handleRating}
                    onPointerMove={onPointerMove}
                    // style={styles}
                  />
                </div>
                )}
                onClickInfo={saveRating}
                />
        </>
    )
}