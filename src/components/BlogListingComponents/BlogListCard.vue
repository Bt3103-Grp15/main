<template>
<div id="blogcard">	
	
	<div class="blog-details">
		<h1>{{blogs.title}}</h1>
		<p class="information"> {{blogs.description}} </p>
        <div class="control">
            <p> {{blogs.username}} in {{blogs.place}} </p> 
            <p>Likes: {{blogs.likes}} </p>
        </div>
	</div>
	
    <div class="blog-image">
        <img :src="require(`../../assets/${blogs.bimage}`)" alt="">

        <div class="blog_info">
            <h2> Description</h2>
            <ul>
            <li><strong>Post Time : </strong> {{blogs.date}} </li>
            <li><strong>Travel Days : </strong>7 days</li>
            <li><strong>Average Spending: </strong>3000HKD</li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "blogsP",
  props: ["blogs"],
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bree+Serif&family=EB+Garamond:ital,wght@0,500;1,800&display=swap');

body {
    background: #DFC2F2 !important;
	background-image: linear-gradient( to right, #ffffb3,#ffe6e6) !important;
	background-attachment: fixed !important; 	
	background-size: cover !important;
}

#blogcard{
	box-shadow: 0 15px 30px 1px grey;
	background: rgba(255, 255, 255, 0.90);
	text-align: center;
	border-radius: 5px;
	overflow: hidden;
	margin: 50px auto;
	height: 350px;
	width: 700px;
}

.blog-details {
	position: relative;
	text-align: left;
	overflow: hidden;
	padding: 30px;
	height: 100%;
	float: left;
	width: 40%;

}

#blogcard .blog-details h1{
	font-family: 'Bebas Neue', cursive;
	display: inline-block;
	position: relative;
	font-size: 30px;
	color: #344055;
	margin: 0;
	
}

#blogcard .blog-details h1:before{
	position: absolute;
	content: '';
	right: 0%; 
	top: 0%;
	transform: translate(25px, -15px);
	font-family: 'Bree Serif', serif;
	display: inline-block;
	border-radius: 5px;
	font-size: 14px;
	padding: 5px;
	color: white;
	margin: 0;
	animation: chan-sh 6s ease infinite;

}

#blogcard .blog-details > p {
	--font-family: 'EB Garamond', serif;
	--text-align: left;
	font-size: 18px;
	color: #7d7d7d;
	
}

.control{
	position: absolute;
	bottom: 20%;
	left: 10%;
}

.blog-image {
	transition: all 0.3s ease-out;
	--display: inline-block;
	position: relative;
	overflow: hidden;
	height: 100%;
	float: right;
	width: 45%;
}

#blogcard img {width: 100%;height: 100%;}

.blog_info {
    background: rgba(27, 26, 26, 0.9) ;
    --font-family: 'Bree Serif', serif ;
    transition: all 0.3s ease-out ;
    transform: translateX(-100%) ;
    position: absolute ;
	font-size: 13px;
    line-height: 1.8 ;
    text-align: left ;
    cursor: no-drop ;
    color: #f1f1f1 ;
    height: 100% ;
    width: 100% ;
    left: 0 ;
    top: 0 ;
}

.blog_info h2 {--text-align: center; color: #f1f1f1;}
.blog-image:hover .blog_info{transform: translateX(0)}

.blog_info ul li{transition: 0.3s ease }
.blog_info ul li:hover{transform: translateX(50px) scale(1.3) }

.blog-image:hover img {transition: all 0.3s ease-out;}
.blog-image:hover img {transform: scale(1.2, 1.2);}

</style>