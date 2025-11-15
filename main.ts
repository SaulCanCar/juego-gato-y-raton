enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Alcantarilla = SpriteKind.create()
    export const Alcantarilla2 = SpriteKind.create()
}
info.onScore(15, function () {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.smiles)
    game.setGameOverPlayable(true, music.melodyPlayable(music.magicWand), false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    amongUsPose2.x += 30
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    amongUsPose2.startEffect(effects.smiles, 500)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Alcantarilla2, function (sprite, otherSprite) {
    IMPOSTOR.x += -104
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    sprites.destroy(IDAmongUs)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    IMPOSTOR.startEffect(effects.disintegrate, 500)
    sprites.destroy(amongUsPose2)
    amongUsPose2 = sprites.create(assets.image`MUERTO`, SpriteKind.Player)
    pause(2000)
    game.gameOver(false)
    game.setGameOverEffect(false, effects.dissolve)
    game.setGameOverPlayable(false, music.melodyPlayable(music.wawawawaa), false)
})
let IDAmongUs: Sprite = null
let IMPOSTOR: Sprite = null
let amongUsPose2: Sprite = null
info.setScore(0)
scene.setBackgroundImage(assets.image`Fondo LUNA`)
scene.cameraFollowSprite(amongUsPose2)
let mySprite2 = sprites.create(assets.image`Alcantarilla`, SpriteKind.Alcantarilla)
mySprite2.setPosition(10, 107)
let Alcantarilla_2 = sprites.create(assets.image`Alcantarilla`, SpriteKind.Alcantarilla2)
Alcantarilla_2.setPosition(114, 107)
amongUsPose2 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
characterAnimations.runFrames(
amongUsPose2,
assets.animation`Among us 1`,
200,
characterAnimations.rule(Predicate.NotMoving)
)
controller.moveSprite(amongUsPose2)
characterAnimations.loopFrames(
amongUsPose2,
assets.animation`Among us bajando`,
200,
characterAnimations.rule(Predicate.MovingUp)
)
IMPOSTOR = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
characterAnimations.loopFrames(
IMPOSTOR,
assets.animation`myAnim`,
200,
characterAnimations.rule(Predicate.NotMoving)
)
IMPOSTOR.setPosition(0, 60)
pause(500)
IMPOSTOR.follow(amongUsPose2, 20)
forever(function () {
    pause(1500)
    IDAmongUs = sprites.create(assets.image`miImagen`, SpriteKind.Food)
    IDAmongUs.setPosition(randint(7, 143), randint(7, 107))
    pause(1500)
    sprites.destroy(IDAmongUs)
})
forever(function () {
    amongUsPose2.setBounceOnWall(true)
})
forever(function () {
    characterAnimations.loopFrames(
    amongUsPose2,
    assets.animation`Among us 2`,
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    amongUsPose2,
    assets.animation`Among us 2 reversa`,
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    amongUsPose2,
    assets.animation`Among us 2`,
    200,
    characterAnimations.rule(Predicate.MovingRight, Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    amongUsPose2,
    assets.animation`Among us 2 reversa`,
    200,
    characterAnimations.rule(Predicate.MovingLeft, Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    amongUsPose2,
    assets.animation`Among us 2`,
    200,
    characterAnimations.rule(Predicate.MovingRight, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    amongUsPose2,
    assets.animation`Among us 2 reversa`,
    200,
    characterAnimations.rule(Predicate.MovingLeft, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    amongUsPose2,
    assets.animation`myAnim0`,
    200,
    characterAnimations.rule(Predicate.MovingDown)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    IMPOSTOR,
    assets.animation`myAnim2`,
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    IMPOSTOR,
    assets.animation`myAnim3`,
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
})
forever(function () {
    music.play(music.stringPlayable("C5 F G F G F G F ", 120), music.PlaybackMode.UntilDone)
})
