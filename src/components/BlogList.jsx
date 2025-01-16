import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createClient } from 'contentful';
import { Grid } from '@mui/material';
import { Link } from 'react-router';

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const client = createClient({
    space: "w0gaortj5cym",
    accessToken: "VCHNX-SzbrVb2flYj3B7pG0xOjTmZxt1Jxb0YkdzA8c",
  });

  useEffect(() => {
    const getAllentries = async () => {
      try {
        const response = await client.getEntries();
        console.log(response.items);
        setBlogPosts(response.items);
      } catch (error) {
        console.log(error);
      }
    };
    getAllentries();
  }, []);
  console.log(blogPosts)
  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem" }}>Blog Posts</h1>
      <Grid container spacing={4} justifyContent="center">
        {blogPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.sys.id}>
            <Card sx={{ maxWidth: 500, minHeight: 500, borderRadius: 3, boxShadow: 3 }}>
              <CardMedia
                sx={{ height: 200 }}
                image={post.fields.blogImage?.fields.file.url}
                title={post.fields.blogTitle}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{ fontSize: '1.8rem', fontWeight: 'bold' }}
                >
                  {post.fields.blogTitle}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary', fontSize: '1.1rem' }}
                >
                  {post.fields.blogSummary} {/* Display blog summary if you have it */}
                </Typography>
              </CardContent>
              <CardActions>
                <Link size="small" to={`/blogdetails/${post.sys.id}`}>Read More</Link>
                
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default BlogList;
