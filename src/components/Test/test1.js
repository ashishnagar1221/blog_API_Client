import React from 'react'

class Test1 extends React.Component {
    constructor(){
        super();
        this.state = {posts:[]};
    }

    componentDidMount(){
        fetch('https://blog-api-assign.herokuapp.com/posts',{
                headers : { 
                  "Content-Type":"application/json",
                  'Accept': 'application/json'
                  
                 }
        }).then(response =>{
            response.json().then(post =>{
                this.setState({
                    posts:post
                })
            })
        })
    }

      renderItems() {

        return this.state.posts.map(item => (
            
          <div key={item._id}>
            <h5> {item.title}</h5>
            <p>{item.postText}</p>
            </div>
        ));
      }
 render() {
     
        return (
        <div>
            read the existing data = fetches the blog posts
            <h3>All Posts</h3>
            {this.renderItems()}
        </div>
        )
     
 }
}


export default Test1