<template>
    <div><h1>header</h1></div>
    <div class="form-div">
        <form id="form" role="search" >
        <input id="query" name="q" placeholder="Search here..." aria-label="Search through site content">
        <button class="searchbtn" @click="updatedestination">
            <svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 
            36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 
            0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 
            408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 
            218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
        </button>
    </form>
    </div>

    <div class="filter">
        <h2> All Results for {{destination}} </h2>
    </div> <br> <br> <br>

    <div class="dropdown">
        <DropDown class="my-dropdown-toggle"
          :options="arrayOfObjects1" 
          :selected="object1" 
          v-on:updateOption="methodToRunOnSelect" 
          :placeholder="'Select an Item'"
          :closeOnOutsideClick="boolean">
        </DropDown>

        <DropDown class="my-dropdown-toggle"
          :options="arrayOfObjects2" 
          :selected="object2" 
          v-on:updateOption="methodToRunOnSelect" 
          :placeholder="'Select an Item'"
          :closeOnOutsideClick="boolean">
        </DropDown>

        <DropDown class="my-dropdown-toggle"
          :options="arrayOfObjects3" 
          :selected="object3" 
          v-on:updateOption="methodToRunOnSelect" 
          :placeholder="'Select an Item'"
          :closeOnOutsideClick="boolean">
        </DropDown>

        <DropDown class="my-dropdown-toggle"
          :options="arrayOfObjects4" 
          :selected="object4" 
          v-on:updateOption="methodToRunOnSelect" 
          :placeholder="'Select an Item'"
          :closeOnOutsideClick="boolean">
        </DropDown>
    </div>
    
    <div>
        <MyBlogs :blogs="blogs" v-for="(blogs,index) in bloglist" :key="index"/>
    </div>

    <button class="readbtn">Read More</button>
    
</template>

<script>
import MyBlogs from "../../components/BlogListingComponents/BlogListCard.vue"
import DropDown from "../../components/BlogListingComponents/DropDown.vue"

export default {
    name: 'BlogListingPage',
    props: ["blogs"],
    data () {
        return {
            destination: "",
            bloglist: [
                { bimage: "hongkong1.jpeg", title: "First Blog" , description: "the thhhdhdhd description of my first trip to Hong Kong", date: "Dec 11 2022", username: "Dora Zhu", place: "HongKong", likes: 1000},
                { bimage: "hongkong2.jpeg", title: "Second Blog", description: "the detailed description of my second trip to Hong Kong", date: "Jan 23 2021", username: "Kelly Zhou", place: "HongKong", likes: 1300},
            ],
            arrayOfObjects1: [{name: "Most Viewed"}, {name: "Most Popular Blog"}],
            arrayOfObjects2: [{name: "2022"}, {name: "2021"}],
            arrayOfObjects3: [{name: "10 days"}, {name: "20 days"}],
            arrayOfObjects4: [{name: "1000HKD"}, {name: "2000HKD"}],
            object1: {  name: 'Category', },
            object2: {  name: 'Depature Time', },
            object3: {  name: 'Travel Days', },
            object4: {  name: 'Average Spending', },
        }
    },
    components: {
        MyBlogs,
        DropDown,
    },
    methods: {
        methodToRunOnSelect(payload) {
          this.object = payload;
        },
        updatedestination() {
          this.destination = document.querySelector("input[name=q]").value
        }
    }
}
</script>

<style>
body{
    background-image: url('../../assets/view.jpg');
    background-size: contain, cover;
}

.filter{
    position: absolute;
    left: 30%;
}

.form-div{
    display: flex;
    justify-content: center;
}

form {
  background-color: #f1f1f1;
  width: 600px;
  height: 44px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

input {
  all: unset;
  font: 16px system-ui;
  color: cadetblue;
  height: 100%;
  width: 100%;
  text-align: left;
  padding: 6px 10px;
}

::placeholder {
  color: cadetblue;
  opacity: 0.7; 
}

.searchbtn {
  all: unset;
  cursor: pointer;
  width: 44px;
  height: 44px;
}

.readbtn{
    width: 200px;
    height: 80px;
    border: none;
    outline: none;
    background: #2f2f2f;
    color: #fff;
    font-size: 22px;
    border-radius: 40px;
    text-align: center;
    box-shadow: 0 6px 20px -5px rgba(0,0,0,0.4);
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.check-box{
    width: 80px;
    height: 80px;
    border-radius: 40px;
    box-shadow: 0 0 12px -2px rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    right: -40px;
    opacity: 0;
}


svg {
  color: cadetblue;
  fill: currentColor;
  width: 24px;
  height: 24px;
  padding: 10px;
}

.readbtn {
	width: 150px;
	height: 50px;
	cursor: pointer;
	font-size: 20px;
	font-weight: bold;
	color: cadetblue;
	background: white;
	border: 2px solid cadetblue;
	box-shadow: 5px 5px 0 cadetblue,
		-5px -5px 0 cadetblue,
		-5px 5px 0 cadetblue,
		5px -5px 0 cadetblue;
	transition: 500ms ease-in-out;
}

.readbtn:hover {
	box-shadow: 20px 5px 0 cadetblue, -20px -5px 0 cadetblue;
}

.readbtn:focus {
	outline: none;
}
</style>