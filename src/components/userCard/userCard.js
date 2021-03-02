import React, { useState } from "react";
import "./userCard.css"
import { Text } from "../text/text"
import { Button }from "../button/button"
import { Avatar } from "../avatar/avatar"
import { Card } from "../card/card"

export const UserCard = ({profileImage, firstName, lastName, age, setActiveUserIndex}) => {
    
    

    return (
        
        <Card>
            <div className="user-card"> 
            <Avatar image={profileImage} size="medium"></Avatar>
            <Text tag="p">{`${firstName} ${lastName}`}</Text>
            <Text tag="p">{!age ? "No Birthdate Entered" : `${age} Years Old`}</Text>
            <Button onClick={setActiveUserIndex} size="medium" title="View Profile"></Button>
            </div>
        </Card>
    )
}

