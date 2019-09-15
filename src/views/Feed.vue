<template>
    <v-app>
        <v-container>
            <v-row v-bind:key="post.id" v-for="post in posts" justify="center">
                <v-col cols="6">
                    <v-card>
                        <v-list-item>
                            <v-list-item-avatar size="55" color="grey">
                                <v-img :src="post.author.img"></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title>{{ post.author.name }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-card-text>
                            <span class="text--primary">
                                {{ post.text }}
                            </span>
                        </v-card-text>

                        <v-img :src="post.img"></v-img>

                        <v-row justify="end">
                            <v-col cols="2">
                                <v-btn :color="post.btns.color" @click="post.btns.state ^= true; if (post.btns.state === 1) {post.btns.color = 'pink'} else {post.btns.color = ''}" icon>
                                    <v-icon>mdi-heart</v-icon>
                                </v-btn>
                                <v-btn icon>
                                    <v-icon>mdi-share-variant</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>

                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ... mapState({
            posts: state => state.posts
        })
    },
    data: () => {
        return {
            post: {},
        }
    }
}
</script>
