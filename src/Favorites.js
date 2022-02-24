import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Favorites = ({ favoriteHidden, favorite, handleRemoveFavorite }) => {
  const showFavorites = favorite.map((object, index) => {
    return (
      <div key={index}>
        <Container
          className={favoriteHidden}
          key={index}
          className="FavoritesCard"
        >
          <Card>
            <Card.Header className="text-center">Favorite </Card.Header>
            <Container>
              <Card.Title className="text-center">{object.activity}</Card.Title>
              <Card.Body className="text-center">
                <Card.Text> Type: {object.type}</Card.Text>
                <Card.Text> Participants: {object.participants}</Card.Text>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => handleRemoveFavorite(object)}
                >
                  Remove Activity
                </Button>{" "}
              </Card.Body>
            </Container>
            <Card.Footer className="text-center"></Card.Footer>
          </Card>
        </Container>
      </div>
    );
  });
  return (
    <div className={favoriteHidden}>
      <h2 className="text-center">Your List</h2>
      {showFavorites}
    </div>
  );
};
export default Favorites;
