<template>
<div>
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-container>
        <v-list rounded dense nav>
          <v-list-item-group color="primary">
            <v-list-item 
            v-for="nav_list in nav_lists" 
            :key="nav_list.name"
            :to="nav_list.link"
            >
              <v-list-item-icon>
                <v-icon>{{ nav_list.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          <v-list-item-group>
            <v-list-item @click="logout()" v-if="isLoggedIn">
              <v-list-item-icon><v-icon>mdi-logout</v-icon></v-list-item-icon>
              <v-list-item-title>ログアウト</v-list-item-title>
            </v-list-item>
            </v-list-item-group>
        </v-list>
      </v-container>
    </v-navigation-drawer>

    <v-app-bar color="primary" dark app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
          <v-btn
          :to="{ path: '/' }"
          text
      >
      旅＋
      </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

 
        <v-row align="center" justify="center">
               <v-col cols="3">
          <v-select
            :items="items"
            label="場所"
            hide-details
            dense
            solo-inverted
            rounded
            autowidth
          ></v-select>
               </v-col>
     
 
<v-col cols="9">
      <v-text-field
        dense
        flat
        hide-details
        rounded
        solo-inverted
        prepend-inner-icon="mdi-magnify"
        label="検索"
      ></v-text-field>
      </v-col>
         </v-row>

      <v-spacer></v-spacer>


      <v-btn icon dark color="amber" v-if="isLoggedIn" >
        <v-icon dark>
          mdi-bell
        </v-icon>
      </v-btn>

      <v-btn dark outlined icon x-large v-if="isLoggedIn">
        <v-icon dark>
          mdi-account
        </v-icon>
      </v-btn>

      <v-btn color="orange darken-2" rounded dark @click="loginDialog = !loginDialog" v-if="!isLoggedIn">
        ログイン
      </v-btn>


      <v-btn color="amber darken-1" rounded dark @click="registerDialog = !registerDialog" v-if="!isLoggedIn">
        新規登録
      </v-btn>

<col>

    </v-app-bar>

        <v-dialog 
    v-model="loginDialog" 
    max-width="600"
    >
      <v-card>
        <v-card-title>ログイン</v-card-title>

               <v-container>
          <v-row>
            <v-col>
        <v-text-field label="メールアドレス" prepend-icon="mdi-email" size='medium' v-model="loginEmail" ></v-text-field>
        <v-text-field label="パスワード" prepend-icon="mdi-lock" type="password" v-model="loginPassword"></v-text-field>
        </v-col>
        </v-row>
        </v-container>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text color="primary" @click="loginDialog = false">
            キャンセル
          </v-btn>
          <v-btn text color="primary" @click="login()">
            ログイン
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

            <v-dialog 
    v-model="registerDialog" 
    max-width="600"
    >
      <v-card>
        <v-card-title>新規登録</v-card-title>
        <v-container>
          <v-row>
            <v-col>
        <v-text-field label="メールアドレス" prepend-icon="mdi-email" size='medium' v-model="registerEmail" ></v-text-field>
        <v-text-field label="パスワード" prepend-icon="mdi-lock" type="password" v-model="registerPassword"></v-text-field>
        </v-col>
        </v-row>
        </v-container>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text color="primary" @click="registerDialog = false">
            キャンセル
          </v-btn>
          <v-btn text color="primary" @click="register()">
            登録
          </v-btn>
        </v-card-actions>
      </v-card>

            </v-dialog>

</div>
</template>

<script>
import axios from "../axios"

export default {

  data() {
    return {

      loginPassword: "",
      registerEmail: "",
      registerPassword: "",

      loginEmail: "",
      loginDialog: false,
      registerDialog: false,
      drawer: null,
      nav_lists: [
        { name: "ホーム", icon: "mdi-home", link: "/" },
        { name: "お気に入り", icon: "mdi-heart", link:"" },
        { name: "ランキング", icon: "mdi-compass", link:"" },
        { name: "履歴", icon: "mdi-history", link:"" },
        { name: "マイページ", icon: "mdi-account", link:"" },
        { name: "設定", icon: "mdi-cog", link:"" },
        { name: "ヘルプ", icon: "mdi-help", link:"" },
        { name: "ヘルパーに登録する", icon: "mdi-account-plus", link:"" },
      ],
      items: ["大阪", "東京", "名古屋"],
    };
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters.idToken !== null
    },

  },

  methods: {

    logout() {
      this.$store.commit('updateIdToken', null)
      this.$router.push('/logout')
    },

    login() {
      axios.post(
        '/accounts:signInWithPassword?key=AIzaSyBE2yOjIU9kUzd_pIUD77n13e1-r6BxqW8',
        {
          email: this.loginEmail,
          password: this.loginPassword,
          returnSecureToken: true
        }
      ).then( (response) => {

        this.$store.commit('updateIdToken', response.data.idToken)
        localStorage.setItem('updateIdToken', response.data.idToken)

      })
      this.loginEmail = ""
      this.loginPassword = ""
      this.loginDialog = false

    },

    register() {
      axios.post(
        '/accounts:signUp?key=AIzaSyBE2yOjIU9kUzd_pIUD77n13e1-r6BxqW8',
        {
          email: this.registerEmail,
          password: this.registerPassword,
          returnSecureToken: true
        }
      ).then((response) => {
        this.$store.commit('updateIdToken', response.data.idToken)
      })
      this.registerEmail = ""
      this.registerPassword = ""
      this.registerDialog = false
    }
  }
};
</script>