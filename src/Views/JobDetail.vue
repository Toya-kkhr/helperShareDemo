<template>
  <v-container>
    <v-app>
      <v-row justify="center" align="center">
        <v-col cols="12" align="center">
          <v-card width="1000" light color="blue lighten-4">
            <v-col align="center" >
              <v-img
                src="https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHVzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                width="80%"
                height="80%"
                class="ma-5"
              >
              </v-img>
            </v-col>
            <v-card-text>
              <v-col align="center" class="pt-0">
                <v-rating
                  :value="4.0"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="50"
                ></v-rating>
                <div>
                  4.0 (413)
                </div>
              </v-col>
            </v-card-text>

            <v-chip-group>
              <v-col align="center">
                <v-chip
                  v-for="tag in helper.tags"
                  :key="tag"
                  disabled
                  dark
                  color="black"
                >
                  {{ tag }}
                </v-chip>
              </v-col>
            </v-chip-group>

            <v-col>
              <v-card rounded="xl">
                <v-card-title>
                  基本情報
                </v-card-title>
                <v-avatar size="150">
                  <v-img
                    src="https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHVzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  >
                  </v-img>
                </v-avatar>

                <v-card-text v-for="n in helper.name" :key="n">
                  <h2>{{ n }}</h2>
                </v-card-text>

                <v-card-text v-for="q in helper.quali" :key="q">
                  <h2>{{ q }}</h2>
                </v-card-text>

                <v-card-text v-for="p in helper.price" :key="p">
                  <h2>{{ p }}円/時間</h2>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col>
              <v-card rounded="xl">
                <v-card-title>自己紹介/サービス内容</v-card-title>
                <v-card-text>
                  {{ text }}
                </v-card-text>
              </v-card>
            </v-col>

            <v-col>
              <v-card rounded="xl">
                <v-card-title>対応エリア</v-card-title>
                <v-card-text>
                  {{ text }}
                </v-card-text>
              </v-card>
            </v-col>

            <v-col>
              <v-card rounded="xl">
                <v-card-title>実績/経験</v-card-title>
                <v-card-text>
                  {{ text }}
                </v-card-text>
              </v-card>
            </v-col>

            <v-col>
              <v-card rounded="xl">
                <v-card-title>保有資格</v-card-title>
                <v-card-text>
                  {{ text }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </v-app>

    <v-fab-transition>
      <v-layout column class="fab-container">
        <v-row class="mb-15" align="center">
          <v-btn
            color="green"
            dark
            x-large
            rounded
            elevation="5"
            @click="dialog = !dialog"
          >
            依頼/相談する
          </v-btn>

          <v-btn
            color="pink"
            dark
            class="mr-10 ml-5"
            fab
            large
            elevation="5"
          >
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </v-row>
      </v-layout>
    </v-fab-transition>

    <v-dialog 
    v-model="dialog" 
    max-width="600"
    persistent
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">目的地/目的と希望日時を入力してください。</span>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col>
               
              <v-text-field
              label="目的/目的地"
              required
              >
              </v-text-field>
              <col>
<date-picker></date-picker>
         <col>
  <time-picker></time-picker>
  <v-menu
        ref="menu"
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="time"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="time"
            label="終了予定時間"
            prepend-icon="mdi-clock-time-four-outline"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="menu2"
          v-model="time"
          full-width
          @click:minute="$refs.menu.save(time)"
        ></v-time-picker>
      </v-menu>
   </v-col>

          </v-row>
        </v-container>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text color="primary" @click="dialog = false">
            キャンセル
          </v-btn>
          <v-btn text color="primary" @click="dialog = false">
            送信
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
import DatePicker from '../Components/DatePicker.vue';
import TimePicker from '../Components/TimePicker.vue';

export default {
  components: {
    DatePicker,
    TimePicker
  },

  data() {
    return {
       time: null,
        menu2: false,

      dialog: false,

      helper: {
        name: ["山田　花子"],
        quali: ["ケアマネジャー"],
        price: ["2,500"],
        tags: [
          "Work",
          "Home Improvement",
          "Vacation",
          "Food",
          "Drawers",
          "Shopping",
          "Art",
          "Tech",
          "Creative Writing",
        ],
      },
      text:
        "この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、",
    };
  },
};
</script>

<style scoped>
.fab-container {
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>
