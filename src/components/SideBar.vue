<template>
    <div class="sidebar">
        <h2>Sort by:</h2>
            <div>
                <input v-if="sortBy.includes('Topic')" type="radio" id="Topic" name="sortby" value="Topic"
                    @change="$emit('onSortChange', 'Topic')" checked>
                <input v-else type="radio" id="Topic" name="sortby" value="Topic" @change="$emit('onSortChange', 'Topic')">
                <label for="Topic">Topic</label><br>
                <input v-if="sortBy.includes('location')" type="radio" id="location" name="sortby" value="location"
                    @change="$emit('onSortChange', 'location')" checked>
                <input v-else type="radio" id="location" name="sortby" value="location" @change="$emit('onSortChange', 'location')">
                <label for="locatoin">Locatoin</label><br>
                <input v-if="sortBy.includes('price')" type="radio" id="price" name="sortby" value="price"
                    @change="$emit('onSortChange', 'price')" checked>
                <input v-else type="radio" id="price" name="sortby" value="price" @change="$emit('onSortChange', 'price')">
                <label for="price">Price</label><br>
                <input v-if="sortBy.includes('space')" type="radio" id="availability" name="sortby" value="space"
                    @change="$emit('onSortChange', 'space')" checked>
                <input v-else type="radio" id="availability" name="sortby" value="space" @change="$emit('onSortChange', 'space')">
                <label for="availability">Availability</label><br>
                <br>
                <input v-if="ascending" type="radio" id="ascending" name="ascdes" :value="ascending"
                    @change="$emit('ascChange', true)" checked>
                <input v-else type="radio" id="ascending" name="ascdes" :value="ascending" @change="$emit('ascChange', true)">
                <label for="ascending">Ascedning</label><br>
                <input v-if="!ascending" type="radio" id="descending" name="ascdes" :value="ascending"
                    @change="$emit('ascChange', false)" checked>
                <input v-else type="radio" id="descending" name="ascdes" :value="ascending" @change="$emit('ascChange', false)">
                <label for="descending">Descending</label><br>
            </div>
    </div>
</template>

<script>    
export default {
    name: 'SideBar',
    props: {
        sortBy: String,
        ascending: Boolean
    },
    emists: ["onSortChange", "ascChange"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped></style> -->