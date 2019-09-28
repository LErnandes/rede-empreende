<template>
<v-app>
    <v-row justify="center">
        <v-col cols="6">
        <v-card>
            <v-list-item>
                <v-list-item-avatar size="55" color="grey">
                    <v-img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    
                </v-list-item-content>
            </v-list-item>

            <v-card-text>
            <v-container>
                <v-row>
                <v-col cols="12">
                    <v-textarea
                        v-model="npost.text"
                        outlined
                        required
                        label="Algo inovador para contar?"
                        no-resize="true"
                    ></v-textarea>
                </v-col>

                <v-col cols="12">
                    <v-text-field v-model="npost.img" label="Link para a Imagem (opcional)" required></v-text-field>
                </v-col>

                <v-img v-if="npost.img != ''" :src="npost.img"></v-img>
                </v-row>

                <v-row justify="end">
                    <v-btn text>Post</v-btn>
                </v-row>
            </v-container>
            </v-card-text>
        </v-card>
        </v-col>
    </v-row>

    <v-row v-bind:key="post._id" v-for="post in posts" justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
            <v-card-title>
                <span class="headline">Compartilhar</span>
            </v-card-title>

            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-textarea
                                v-model="share.coment"
                                outlined
                                label="Adicione um comentário"
                                no-resize="true"
                            ></v-textarea>
                        </v-col>

                        <v-col>
                            <v-card>
                                <v-card-text>
                                    <span class="text--primary">
                                        {{ share.post.text }}
                                    </span>
                                </v-card-text>

                                <v-img :src="share.post.img"></v-img>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">Post</v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>

        <v-col cols="6">
            <v-card>
                <div v-if="post.coment.text != ''">
                    <v-list-item>
                        <v-list-item-avatar size="55" color="grey">
                            <v-img :src="post.coment.author.img"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>{{ post.coment.author.name }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-card-text>
                        <span class="text--primary">
                            {{ post.coment.text }}
                        </span>
                    </v-card-text>

                    <v-divider></v-divider>
                </div>

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
                                
                        <v-btn @click="share.post = post; dialog = true" icon>
                            <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
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
            npost: {text: '', img: ''},
            post: {},
            share: {post: {}, coment: ''},
            dialog: false,
        }
    },
}
</script>
