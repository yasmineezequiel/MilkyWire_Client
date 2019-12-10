import React from "react";
import { Container, Divider, Grid, Image, Card } from "semantic-ui-react";

const PostCard = props => {
  let post = props.post;
  let linked = props.linked;

  return (
    <>
      <Container
        textAlign="justified"
        name={linked ? `post-${post.id}` : "post"}
      >
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>
              <Card>
                <Image src={post.image} alt="" />
                <Card.Content>
                  {linked ? (
                    <Link
                      id={`post-${post.id}`}
                      to={`/post/${post.id}`}
                    >
                      <Card.Header as="h3" name="post-title">
                        {post.title}
                      </Card.Header>
                    </Link>
                  ) : (
                    <Card.Header as="h3" name="post-title">
                      {post.title}
                    </Card.Header>
                  )}
                  <Divider />
                  <Card.Description>
                    <p style={{ fontWeight: "bold" }}>Title: </p>
                    <p name="post-title">{post.title}</p>
                    <p style={{ fontWeight: "bold" }}>Text: </p>
                    <p name="post-text">{post.text}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};
export default PostCard;