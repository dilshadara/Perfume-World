import React from 'react';

const Blogs = () => {
    return (
        <div className='ms-5' style={{textAlign:'left'}}>
            <h3>Difference between javascript and nodejs</h3>
            <p>1. Javascript is a programming language that is used for any client side activity for any web sites Whereas NodeJS is a javascript runtime environment.</p>
            <p>2. Javascript can run in any engine such as Spider monkey (FireFox), V8 (Google Chrome). On the other hand, Node JS only support V8 engine, that parses and runs Javascript.</p>
            <p>3. Javascript is used in frontend development. NodeJs is used in server-side development.</p>
            <p>4. JavaScript normally follows Java Programming Language standard. Whereas node JS is written in C++ and provides a V8 engine base browser javascript running engine which helps us run a written javascript code in any browser. </p>
            <h3>When should you use nodejs and when should you use mongodb</h3>
            <p>NodeJS and MongoDB are two different technologies. NodeJS is a JavaScript runtime environment. It actually helps Javascript to run outside of server. It's used in server side development. Whereas,MongoDB is NoSQL database which is document oriented. It's used for performing database operations.</p>
            <p>Nodejs is a Javascript engine that we can use to build any server side application. It is used to build servers that can respond to web requests. On the other hand, MongoDB is a database engine which provides the features to save, update , delete and retrieve document from he database.  </p>
            <p>MongoDB provides an API library that runs within a Nodejs application and provides the functionality to programmatically access to MongoDB and do all db operations.</p>
            <h3>Differences between sql and nosql databases.</h3>
            <p>The major differences between sql and nosql are:</p>
            <p>1. SQL databases are relational, NoSQL databases are non-relational.
               
            </p>
            <p> 2. SQL databases use structured query language and have a predefined schema. NoSQL Databases have dynamic schemas for unstructured data. </p>
            <p>3. SQL databases are table based, while NoSQL databases are document, key-value type.</p>
            <p>4. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</p>
            <h3>What is the purpose of jwt and how does it work</h3>
            <p>JWT or JSON Web Token is an open standard that defines a compact and self-contained way for securely transmitting information between two parties - a client and a server, as JSON object.</p>
            <p>
                JWT tokens are different from other web token as they contain a set of claims. Claims are used to transmit information between two parties. This claim may assert who issue the token, how long this is valid, or the permissions the client has been granted.
            </p>
            <p>A JWT token is made up of three parts, separated by dots(.) and serialized using base64. After decoding the token provides two JSON strings: 1. the header and the payload and 2. the signature. <b>Header</b> contains the type of token and the signing algorithm. The <b>payload</b> contains the claims. The <b>signature</b> ensures that token hasn't been altered.</p>
        </div>
    );
};

export default Blogs;