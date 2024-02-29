namespace SpriteKind {
    export const tiles = SpriteKind.create()
}
function tileimage (sprite: Sprite) {
    sprite.setImage(assets.image`greentile`.clone())
    printnum(sprite.image, sprites.readDataNumber(sprite, "value"))
    sprite.image.replace(6, 0)
}
function tilesshowtheirnumber () {
    for (let value of grid.allSprites()) {
        tile.sayText("" + sprites.readDataNumber(tile, "value"))
    }
}
function addnumber (num: number) {
    tile = sprites.create(assets.image`greentile`, SpriteKind.Player)
    grid.place(tile, findemptyspots())
    sprites.setDataNumber(tile, "value", num)
    printnum(tile.image, num)
}
function printnum (image2: Image, num: number) {
    if (!(textsprite2)) {
        textsprite2 = textsprite.create("", 0, 15)
        textsprite2.setMaxFontHeight(5)
        textsprite2.setFlag(SpriteFlag.Invisible, true)
    }
    numforprintnum = convertToText(num)
    textsprite2.setText(numforprintnum)
}
function findemptyspots () {
    location = tiles.getTileLocation(randint(1, 6), randint(1, 6))
    while (grid.getSprites(location).length > 0 || tiles.tileIsWall(location)) {
        location = tiles.getTileLocation(randint(1, 6), randint(1, 6))
    }
    return location
}
let location: tiles.Location = null
let numforprintnum = ""
let textsprite2: TextSprite = null
let tile: Sprite = null
scene.setBackgroundColor(1)
tiles.setCurrentTilemap(tilemap`levelscreen4`)
let current_score = 0
let display_score = 0
let moving = false
