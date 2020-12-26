# vue-3-composition-api-issue

From Lesson 9: Sharing State:

> It looks like Vue 2 with the composition API isn’t properly recognizing my Reactive References and calling `.value` like it should. I could fix this by adding `.value` manually **or by actually using Vue 3**. I tested the code with Vue 3 and sure enough, it saw the Reactive References and properly displayed the `.value`.

However, in this example using Vue 3.0.4, I still need to call `.value`