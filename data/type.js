var type = {
    table: {
        normal: {
            normal: 1,
            fighting: 1,
            flying: 1,
            poison: 1,
            ground: 1,
            rock: 0.5,
            bug: 1,
            ghost: 0,
            steel: 0.5,
            fire: 1,
            water: 1,
            grass: 1,
            electric: 1,
            psychic: 1,
            ice: 1,
            dragon: 1,
            dark: 1,
            fairy: 1
        },
        fighting: {
            normal: 2,
            fighting: 1,
            flying: 0.5,
            poison: 0.5,
            ground: 1,
            rock: 2,
            bug: 0.5,
            ghost: 0,
            steel: 2,
            fire: 1,
            water: 1,
            grass: 1,
            electric: 1,
            psychic: 0.5,
            ice: 2,
            dragon: 1,
            dark: 2,
            fairy: 0.5
        },
        flying: {
            normal: 1,
            fighting: 2,
            flying: 1,
            poison: 1,
            ground: 1,
            rock: 0.5,
            bug: 2,
            ghost: 1,
            steel: 0.5,
            fire: 1,
            water: 1,
            grass: 2,
            electric: 0.5,
            psychic: 1,
            ice: 1,
            dragon: 1,
            dark: 1,
            fairy: 1
        },
        poison: {
            normal: 1,
            fighting: 1,
            flying: 1,
            poison: 0.5,
            ground: 0.5,
            rock: 0.5,
            bug: 1,
            ghost: 0.5,
            steel: 0,
            fire: 1,
            water: 1,
            grass: 2,
            electric: 1,
            psychic: 1,
            ice: 1,
            dragon: 1,
            dark: 1,
            fairy: 2
        },
        ground: {
            normal: 1,
            fighting: 1,
            flying: 0,
            poison: 2,
            ground: 1,
            rock: 2,
            bug: 0.5,
            ghost: 1,
            steel: 2,
            fire: 2,
            water: 1,
            grass: 0.5,
            electric: 2,
            psychic: 1,
            ice: 1,
            dragon: 1,
            dark: 1,
            fairy: 1
        },
        rock: {
            normal: 1,
            fighting: 0.5,
            flying: 2,
            poison: 1,
            ground: 0.5,
            rock: 1,
            bug: 2,
            ghost: 1,
            steel: 0.5,
            fire: 2,
            water: 1,
            grass: 1,
            electric: 1,
            psychic: 1,
            ice: 2,
            dragon: 1,
            dark: 1,
            fairy: 1
        },
        bug: {
            normal: 1,
            fighting: 0.5,
            flying: 0.5,
            poison: 0.5,
            ground: 1,
            rock: 1,
            bug: 1,
            ghost: 0.5,
            steel: 0.5,
            fire: 0.5,
            water: 1,
            grass: 2,
            electric: 1,
            psychic: 2,
            ice: 1,
            dragon: 1,
            dark: 2,
            fairy: 0.5
        },
        ghost: {
            normal: 0,
            fighting: 1,
            flying: 1,
            poison: 1,
            ground: 1,
            rock: 1,
            bug: 1,
            ghost: 2,
            steel: 1,
            fire: 1,
            water: 1,
            grass: 1,
            electric: 1,
            psychic: 2,
            ice: 1,
            dragon: 1,
            dark: 0.5,
            fairy: 1
        },
        steel: {
            normal: 1,
            fighting: 1,
            flying: 1,
            poison: 1,
            ground: 1,
            rock: 2,
            bug: 1,
            ghost: 1,
            steel: 0.5,
            fire: 0.5,
            water: 0.5,
            grass: 1,
            electric: 0.5,
            psychic: 1,
            ice: 2,
            dragon: 1,
            dark: 1,
            fairy: 2
        },
        fire: {
            normal: 1,
            fighting: 1,
            flying: 1,
            poison: 1,
            ground: 1,
            rock: 0.5,
            bug: 2,
            ghost: 1,
            steel: 2,
            fire: 0.5,
            water: 0.5,
            grass: 2,
            electric: 1,
            psychic: 1,
            ice: 2,
            dragon: 0.5,
            dark: 1,
            fairy: 1
        },
        water: {
            normal: 1,
            fighting: 1,
            flying: 1,
            poison: 1,
            ground: 2,
            rock: 2,
            bug: 1,
            ghost: 1,
            steel: 1,
            fire: 2,
            water: 0.5,
            grass: 0.5,
            electric: 1,
            psychic: 1,
            ice: 1,
            dragon: 0.5,
            dark: 1,
            fairy: 1
        },
        grass: {
            normal: 1,
            fighting: 1,
            flying: 0.5,
            poison: 0.5,
            ground: 2,
            rock: 2,
            bug: 0.5,
            ghost: 1,
            steel: 0.5,
            fire: 0.5,
            water: 2,
            grass: 0.5,
            electric: 1,
            psychic: 1,
            ice: 1,
            dragon: 0.5,
            dark: 1,
            fairy: 1
        },
        electric: {
            normal: 1,
            fighting: 1,
            flying: 2,
            poison: 1,
            ground: 0,
            rock: 1,
            bug: 1,
            ghost: 1,
            steel: 1,
            fire: 1,
            water: 2,
            grass: 0.5,
            electric: 0.5,
            psychic: 1,
            ice: 1,
            dragon: 0.5,
            dark: 1,
            fairy: 1
        },
        psychic: {
            normal: 1,
            fighting: 2,
            flying: 1,
            poison: 2,
            ground: 1,
            rock: 1,
            bug: 1,
            ghost: 1,
            steel: 0.5,
            fire: 1,
            water: 1,
            grass: 1,
            electric: 1,
            psychic: 0.5,
            ice: 1,
            dragon: 1,
            dark: 0,
            fairy: 1
        },
        ice: {
            normal: 1,
            fighting: 1,
            flying: 2,
            poison: 1,
            ground: 2,
            rock: 1,
            bug: 1,
            ghost: 1,
            steel: 0.5,
            fire: 0.5,
            water: 0.5,
            grass: 2,
            electric: 1,
            psychic: 1,
            ice: 0.5,
            dragon: 2,
            dark: 1,
            fairy: 1
        },
        dragon: {
            normal: 1,
            fighting: 1,
            flying: 1,
            poison: 1,
            ground: 1,
            rock: 1,
            bug: 1,
            ghost: 1,
            steel: 0.5,
            fire: 1,
            water: 1,
            grass: 1,
            electric: 1,
            psychic: 1,
            ice: 1,
            dragon: 2,
            dark: 1,
            fairy: 0
        },
        dark: {
            normal: 1,
            fighting: 0.5,
            flying: 1,
            poison: 1,
            ground: 1,
            rock: 1,
            bug: 1,
            ghost: 2,
            steel: 1,
            fire: 1,
            water: 1,
            grass: 1,
            electric: 1,
            psychic: 2,
            ice: 1,
            dragon: 1,
            dark: 0.5,
            fairy: 0.5
        },
        fairy: {
            normal: 1,
            fighting: 2,
            flying: 1,
            poison: 0.5,
            ground: 1,
            rock: 1,
            bug: 1,
            ghost: 1,
            steel: 0.5,
            fire: 0.5,
            water: 1,
            grass: 1,
            electric: 1,
            psychic: 1,
            ice: 1,
            dragon: 2,
            dark: 2,
            fairy: 1
        }
    },
    getCname: function(key) {
        switch (key) {
            case 'normal':
                return '??????';
            case 'fighting':
                return '???';
            case 'flying':
                return '???';
            case 'poison':
                return '???';
            case 'ground':
                return '???';
            case 'rock':
                return '???';
            case 'bug':
                return '???';
            case 'ghost':
                return '??????';
            case 'steel':
                return '???';
            case 'fire':
                return '???';
            case 'water':
                return '???';
            case 'grass':
                return '???';
            case 'electric':
                return '???';
            case 'psychic':
                return '???';
            case 'ice':
                return '???';
            case 'dragon':
                return '???';
            case 'dark':
                return '???';
            case 'fairy':
                return '??????';
            default:
                return '???';
        }
    },
    getEname: function(key) {
        switch (key) {
            case '??????':
                return 'normal';
            case '??????':
                return 'fighting';
            case '??????':
                return 'flying';
            case '???':
                return 'poison';
            case '??????':
                return 'ground';
            case '??????':
                return 'rock';
            case '???':
                return 'bug';
            case '??????':
                return 'ghost';
            case '???':
                return 'steel';
            case '???':
                return 'fire';
            case '???':
                return 'water';
            case '???':
                return 'grass';
            case '???':
                return 'electric';
            case '?????????':
                return 'psychic';
            case '???':
                return 'ice';
            case '???':
                return 'dragon';
            case '???':
                return 'dark';
            case '??????':
                return 'fairy';
            default:
                return 'undefined';
        }
    },
    getResist: function(keys) {
        var datas = [{
            id: 'weak',
            name: '??????',
            items: []
        }, {
            id: 'area',
            name: '??????',
            items: []
        }, {
            id: 'area',
            name: '??????',
            items: []
        }];
        if (!keys || !keys.length) {
            return datas;
        }
        var result = {
            normal: 1,
            fighting: 1,
            flying: 1,
            poison: 1,
            ground: 1,
            rock: 1,
            bug: 1,
            ghost: 1,
            steel: 1,
            fire: 1,
            water: 1,
            grass: 1,
            electric: 1,
            psychic: 1,
            ice: 1,
            dragon: 1,
            dark: 1,
            fairy: 1
        };
        for (var tablekey in this.table) {
            // tablekey = normal tablievalue = {xxx:1...}
            var tablievalue = this.table[tablekey];
            for (var i = 0, size = keys.length; i < size; i++) {
                // key = grass
                var key = keys[i];
                // 
                result[tablekey] = result[tablekey] * tablievalue[key];
                if (i == size - 1) {

                }
            }
        }
        for (var type in result) {
            var effect = result[type];
            if (effect > 1) {
                datas[0].items.push({
                    id: type,
                    value: effect,
                    cname: this.getCname(type)
                });
            } else if (effect == 1) {
                datas[1].items.push({
                    id: type,
                    value: effect,
                    cname: this.getCname(type)
                });
            } else {
                datas[2].items.push({
                    id: type,
                    value: effect,
                    cname: this.getCname(type)
                });
            }
        }
        // console.log(datas);
        return datas;
    },
    getType: function(selectList) {
        var type = {
            id: 'type',
            name: '??????',
            items: [
                { id: 'normal', value: '??????' },
                { id: 'fighting', value: '???' },
                { id: 'flying', value: '???' },
                { id: 'poison', value: '???' },
                { id: 'ground', value: '???' },
                { id: 'rock', value: '???' },
                { id: 'bug', value: '???' },
                { id: 'ghost', value: '??????' },
                { id: 'steel', value: '???' },
                { id: 'fire', value: '???' },
                { id: 'water', value: '???' },
                { id: 'grass', value: '???' },
                { id: 'electric', value: '???' },
                { id: 'psychic', value: '???' },
                { id: 'ice', value: '???' },
                { id: 'dragon', value: '???' },
                { id: 'dark', value: '???' },
                { id: 'fairy', value: '??????' }
            ]
        };
        if (selectList && selectList.length) {
            for (var i = 0, l = type.items.length; i < l; i++) {
                var item = type.items[i];
                if (selectList.indexOf(item.id) >= 0) {
                    item.checked = true;
                }
            }
        }
        return type;
    }
};
module.exports = type;
