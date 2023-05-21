import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blogs')
    return (
        <div className='container mx-auto'>
            
            <div className='p-5 text-center border rounded-md shadow-lg shadow-amber-300 mb-7 '>
                Some <span className="text-2xl font-bold text-blue-600">Questions & Answers </span>, May help you to integretation about Backend Devlopment
            </div>

            <div className='p-6 mb-6 border rounded-md shadow-lg shadow-red-300' data-aos="fade-up-left">
                <p className='font-bold'><span className='text-2xl text-red-600'>Question:</span> What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                <p><span className='text-green-600'>Answer:</span> An access token is a short-lived credential that grants access to specific resources after authentication.
                    A refresh token is a long-lived credential used to obtain new access tokens when the current one expires.
                    Access tokens are sent with API requests for authentication and authorization.
                    Refresh tokens are securely stored on the client-side and used to request new access tokens.
                    Access tokens can be stored in memory or in an HTTP-only cookie.
                    Refresh tokens should be stored securely in an HTTP-only cookie or local storage with encryption and secure flags.</p>
            </div>
            <div className='p-6 mb-6 border rounded-md shadow-lg shadow-red-300' data-aos="fade-up-right">
                <p className='font-bold'><span className='text-2xl text-red-600'>Question:</span> Compare SQL and NoSQL databases?</p>
                <p><span className='text-green-600'>Answer:</span> SQL Databases:

                    Structured Query Language (SQL) databases are based on a relational model.
                    They use tables with predefined schemas to store data in rows and columns.
                    SQL databases provide strong data consistency and ACID (Atomicity, Consistency, Isolation, Durability) transactions.
                    They are suitable for complex data relationships and structured data.
                    SQL databases are often used in applications with a fixed schema and well-defined data requirements, such as financial systems or traditional web applications.
                    NoSQL Databases:

                    NoSQL databases, also known as "non-relational" databases, offer a flexible and schema-less approach.
                    They use various data models, including key-value pairs, documents, columnar, and graph structures.
                    NoSQL databases provide horizontal scalability and high performance for large-scale data storage and retrieval.
                    They are well-suited for handling unstructured or semi-structured data and can accommodate evolving data needs.
                    NoSQL databases are commonly used in modern web applications, real-time analytics, content management systems, and other scenarios with changing data structures or high scalability requirements.</p>
            </div>
            <div className='p-6 mb-6 border rounded-md shadow-lg shadow-red-300' data-aos="fade-up-left">
                <p className='font-bold'><span className='text-2xl text-red-600'>Question:</span> What is express js? What is Nest JS ?</p>
                <p><span className='text-green-600'>Answer:</span> Express.js is a fast, minimalistic, and flexible web application framework for Node.js.
                    It provides a simple and intuitive API for building web servers and APIs.
                    Express.js allows developers to handle HTTP requests, define routes, manage middleware, and perform other web-related tasks easily.
                    It is highly extensible and supports various middleware and template engines.
                    Express.js is widely used for building web applications and APIs due to its simplicity, scalability, and large community support.
                    Nest.js:

                    Nest.js is a progressive and opinionated Node.js framework for building efficient and scalable server-side applications.
                    It is built with TypeScript and takes inspiration from Angular to provide a modular and structured architecture.
                    Nest.js uses decorators and dependency injection to define modules, controllers, services, and other components.
                    It supports a variety of features, including routing, middleware, authentication, database integration, and more.
                    Nest.js promotes a modular and testable codebase, making it suitable for complex enterprise applications.
                    It leverages the power of TypeScript and brings strong typing and tooling support to Node.js development.</p>
            </div>
            <div className='p-6 mb-6 border rounded-md shadow-lg shadow-red-300' data-aos="fade-up-right">
                <p className='font-bold'><span className='text-2xl text-red-600'>Question:</span> What is MongoDB aggregate and how does it work ?</p>
                <p><span className='text-green-600'>Answer:</span> MongoDB's aggregate is a method for performing complex data manipulations and computations on collections. It works by processing data through a pipeline of stages, where each stage performs a specific operation on the data. It allows for tasks such as filtering, grouping, sorting, and aggregating data within MongoDB. The output is the result of the processed data based on the defined stages.</p>
            </div>
        </div>
    );
};

export default Blog;