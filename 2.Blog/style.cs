*{
    margin: 0px;
    padding: 0px;
    font-family:auto
    box-sizzing: border-box;
}
a{
    text-decoration:none;
}
ul{
    list-style:none;
}
body{
    margin: 0px;
    padding: 0px;
    font-family:'Courier New', Courier, monospace
}
#blog{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.blog-heading{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.blog-heading span{
    color: #f33c3c;
}
.blog-heading h3{
    font-size: 2.4rem;
    color: black;
    font-weight: 500;
}
.blog-container{
    display:inline-flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0px;
    flex-wrap: wrap;
}
.blog-box{
    width:auto;
    background-color: azure;
    border: 2px solid aliceblue;
    margin: 20px;
}
.blog-image{
    width: fit-content;
    height: fit-content;
}
.blog-image img{
    width: fit-content;
    height: fit-content;
    object-fit: fill;
    object-position: center;
}
