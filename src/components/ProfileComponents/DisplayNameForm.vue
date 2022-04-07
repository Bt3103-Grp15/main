<template>
<div class="container">
    <form @submit="onSubmit" class="change-display">
        <div class="form-control">
            <label> Display Name*</label>
            <input type="text" v-model="newName" name="newName"  :placeholder="UserName">
        </div>

    <input type="submit" value="Update"/>
    </form>
</div>

</template>

<script>

export default {
    name: "DisplayNameForm",
    props: {
        UserName: {
            type: String,
            default: "User Name" 
        },
    },

    data() {
        return {newName: "",}
    },

    methods: {
        onSubmit(e) {
            e.preventDefault()

            if (!this.newName) {
                alert("Please fill in new name")
                return 
            }

            this.$emit('change-name', this.newName)

            this.newName = ''

        }
    }
}
</script>

<style scoped>
.container {
    text-align: left;
    padding: 1vh 0vw 1vh 0vw;
}

.change-display {
  margin-bottom: 40px;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 30%;
  height: 30px;
  margin-top: 10px ;
  margin-bottom: 5px ;
  padding: 3px 7px;
  font-size: 17px;
}
</style>