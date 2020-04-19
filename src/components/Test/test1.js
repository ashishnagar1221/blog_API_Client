import React from 'react'

class Test1 extends React.Component {
    constructor(){
        super();
        this.state = {posts:[]};
        //console.log(this.state)
    }

    componentDidMount(){
        fetch('/posts',{
                headers : { 
                  'Accept': 'application/json'
                 }
        }).then(response =>{
            response.json().then(post =>{
                //console.log(post)
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