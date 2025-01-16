import { createClient } from 'contentful';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './SingleBlog.css'; // Importing the CSS file

const SingleBlog = () => {
  const [singleBlogPosts, setSingleBlogPosts] = useState(null); // Initialize with null
  const client = createClient({
    space: 'w0gaortj5cym',
    accessToken: 'VCHNX-SzbrVb2flYj3B7pG0xOjTmZxt1Jxb0YkdzA8c',
  });
  const { id } = useParams();

  useEffect(() => {
    const getEntryById = async () => {
      try {
        const entry = await client.getEntry(id);
        setSingleBlogPosts(entry);
      } catch (error) {
        console.error(error);
      }
    };
    getEntryById();
  }, [id]);

  if (!singleBlogPosts) return <p>Loading...</p>;

  return (
    <div className="blog-container">
      <h1 className="blog-title">{singleBlogPosts.fields.blogTitle}</h1>
      {singleBlogPosts.fields.blogImage && (
        <img
          src={singleBlogPosts.fields.blogImage.fields.file.url}
          alt={singleBlogPosts.fields.blogTitle}
          className="blog-image"
        />
      )}
      <div className="blog-content">
        {documentToReactComponents(singleBlogPosts.fields.content)}
      </div>
    </div>
  );
};

export default SingleBlog;
