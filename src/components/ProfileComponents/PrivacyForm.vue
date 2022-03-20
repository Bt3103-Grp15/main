<template>
    <div>
        <p>Login Email:</p>
        <p>{{detail.email}}</p>

        <form @submit="onSubmit" class="change-account">
        <div class="form-control">
            <label> Phone Number</label>
            <input type="text" v-model="number" name="number"  :placeholder="detail.number">
        </div>


    <input type="submit" value="Update"/>
    </form>
    </div>
</template>

<script>
export default {
    name: "PrivacyFrom",
    props: {
        detail : {
        email: 'xx@xx',
        emailPrivacy: false,
        number: 'XX',
        numberPrivacy: false,
    }
    },

    data() {
        return {
            emailPrivacy: false,
            number: "00000000",
            numberPrivacy: false
        }
    },

    methods : {
        getEmailPrivacy() {
            return this.detail.emailPrivacy
        },
        getNumber() {
            return this.detail.number
        }
    }

}
</script>

<style scoped>
.container {
    text-align: left;
}

.change-account {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 30%;
  height: 30px;
  margin-top: 5px ;
  padding: 3px 7px;
  font-size: 17px;
}
</style>