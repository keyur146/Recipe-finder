

import Header from "../components/common/Header";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <Header title="Our Recipes" bgClass="bg-image">
        <Button
            content="SEARCH RECIPES"
            color="purple"
            as={Link}
            to="/recipes"
            size="big"
        />
    </Header>
    );
}

export default Home;