import React from "react"
import { Divider, Grid, Image, Card, Container, List } from "semantic-ui-react"
import '../css/post-card.css'

const PostCard = props => {
  let post = props.post
  let linked = props.linked
  let addPostToFavorites, ratePost, averageRating
  let splitText = post.text.split(',').map((text, index) => <List style={{ margin: '0' }}key={index}>{text}</List>)
  

  return (
    <>
      <Grid.Column
        textAlign="justified"
        name={linked ? `post-${post.id}` : "single-post"}
        style={{ marginBottom: "0.5rem" }}
      >
        <Container style={{ textAlign: 'center', paddingLeft: '5rem' }}>
          {addPostToFavorites}
          {props.children}
        </Container>
        {linked ? (
          <Card style={{ width: '100%', left: '0%', right: '0%' }}>
            <Image src={post.image} alt="" />
                <Card.Header as="h3" name="post-title" style={{ padding: '0.5rem' }}>
                  {post.title}
                </Card.Header>
          </Card>
        ) : (
            <Container>
              <Card style={{ width: '50%', marginTop: '2rem', position: 'relative', left: '30%', right: '70%' }}>
                <Image src={post.image} alt="" />
                <Card.Content>
                  <Card.Header as="h3" name="post-title">
                    {post.title}
                  </Card.Header>
                  <Divider />
                  <Card.Content>  
                  <center><p style={{ fontSize: "16px", marginLeft: "1rem", marginBottom: "1rem" }}>{averageRating}{ratePost}</p></center>
                  </Card.Content>    
                  <Card.Description>
                    <p style={{ fontWeight: "bold", margin: '0' }}>Title: </p>
                    <p name="post-title">{post.title}</p>
                    <p style={{ fontWeight: "bold", margin: '0' }}>Text: </p>
                    <p name="post-text">{splitText}</p>
                  </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                </Card.Content> 
              </Card>
            </Container>
          )}
      </Grid.Column >
    </>
  );
};

export default PostCard;