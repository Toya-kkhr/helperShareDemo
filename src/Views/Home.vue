<template>
  <div>
    <v-row justify="space-around">
      <v-col class="pa-6" align-self="center">
        <v-chip-group>
          <v-chip v-for="tag in tags" :key="tag">
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </v-col>
    </v-row>

    <v-container class="pa-5">
      <v-row>
        <v-col class="pa-3" v-for="n in 24" :key="n" cols="12" xs="4" sm="6" md="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              height="auto"
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              :to="{ path: '/job' }"
              min-width="200"
              max-width="500"
            >
              <v-img
                src="https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHVzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                height="200"
              >
                <v-app-bar flat color="rgba(0, 0, 0, 0)">
                  <v-spacer></v-spacer>
                  <v-btn fab color="pink" small class="white" outlined dark>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                </v-app-bar>
              </v-img>

              <v-card-title v-for="help in helperName" :key="help">
                {{ help }}
              </v-card-title>

              <v-card-subtitle>
                ケアマネジャー
              </v-card-subtitle>

              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="4.0"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14 "
                  ></v-rating>

                  <div class="grey--text ms-4">
                    4.0 (413)
                  </div>
                </v-row>
              </v-card-text>
              <v-col align="center">
                <v-chip-group column>
                  <v-chip
                    v-for="tag in tags"
                    :key="tag"
                    disabled
                    dark
                    color="primary"
                  >
                    {{ tag }}
                  </v-chip>
                </v-chip-group>
              </v-col>
              <v-card-text>
                <h2>2,500円/時間</h2>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      helperName: ["山田　花子"],
    };
  },
};
</script>

<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>
