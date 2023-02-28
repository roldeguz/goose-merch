import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { DirectoryItemContainer, BackgroundImage, DirectoryItemBodyContainer } from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, routeName } = category;
    const navigate = useNavigate();
    
    const onNavigateHandler = () => navigate(routeName);

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
          <BackgroundImage imageUrl={imageUrl} />
          <DirectoryItemBodyContainer>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </DirectoryItemBodyContainer>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;