import React from 'react'

class Test1 extends React.Component {
    constructor(){
        super();
        this.state = {posts:[]};
        //console.log(this.state)
    }

    // fetch('https://www.omdbapi.com/?s=batman&plot=full&apikey=thewdb').then(response => {
    //     response.json().then(data => {
    //       //console.log(data);
    //       this.setState({
    //         data: data.Search
    //       })
    //     })
    //   })

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