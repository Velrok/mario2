namespace SpriteKind {
    export const loot = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.loot, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
    music.play(music.createSong(assets.song`bling`), music.PlaybackMode.UntilDone)
})
let fire_ball: Sprite = null
let Mario = sprites.create(assets.image`super Mario`, SpriteKind.Player)
controller.moveSprite(Mario, 100, 100)
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite2 = sprites.create(img`
    . 5 5 5 5 . . . . . . . . . . . 
    . f 5 5 5 . . . . . . . . . . . 
    . 5 5 5 5 f f f . . . . . . . . 
    . . . 5 5 5 5 5 f . . . . . . . 
    5 5 . 5 5 5 5 5 b . . . . . . . 
    . 5 5 5 5 5 5 5 f . . . . . . . 
    . . . 5 5 5 5 f f . . . . . . . 
    5 5 . 5 5 5 5 f f . . . . . . . 
    . 5 5 5 5 5 5 b f . . . . . . . 
    . . . 5 5 5 5 f f . . . . . . . 
    . . . 5 5 5 5 5 f . . . . . . . 
    . . . 5 5 5 5 5 b . . . . . . . 
    . . . 5 5 . . f f . . . . . . . 
    . . . 5 5 . . 5 5 . . . . . . . 
    . . . 5 5 . . 5 5 . . . . . . . 
    . . . 5 5 . . 5 5 . . . . . . . 
    `, SpriteKind.Enemy)
scene.cameraFollowSprite(Mario)
info.setLife(10)
let myEnemy = 3
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 4 4 4 4 4 4 4 4 . . . . . . 
    . 4 4 5 5 5 5 5 5 4 4 . . . . . 
    . 4 5 5 2 2 2 2 5 5 4 . . . . . 
    . 4 5 5 2 f f 2 5 5 4 . . . . . 
    . 4 5 5 2 f f 2 5 5 4 . . . . . 
    . 4 5 5 2 2 5 5 5 5 4 . . . . . 
    . 4 4 5 5 5 5 5 5 4 4 . . . . . 
    . . 4 4 5 5 5 5 4 4 . . . . . . 
    . . . 4 4 4 4 4 4 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
null.ay = 200
for (let value of tiles.getTilesByType(sprites.dungeon.chestClosed)) {
    fire_ball = sprites.create(assets.image`fire`, SpriteKind.loot)
    tiles.placeOnTile(fire_ball, value)
}
