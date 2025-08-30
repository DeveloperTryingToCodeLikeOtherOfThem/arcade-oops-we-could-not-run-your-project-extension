namespace config {
    export const ARCADE_SCREEN_WIDTH = 320
    export const ARCADE_SCREEN_HEIGHT = 240 
}


 namespace oops {
     export class OOPs{
         _error: string

         get error(): string {
             return this._error
         }

         set error(error: string){
             this._error = error
         }

         constructor() {
             this.error = 'Oops, we could not run your project.'
             scene.createRenderable(-1, () => {
                 screen.fillRect(
                     10,
                     115 * 2 - 10,
                     215,
                     10,
                     4)
                 
                 screen.print(this.error,
                 10, 
                 115 * 2 - 10, 
                 1,
                 image.font8)
             })
         }

         toString (): string {
            return `runtime error ${this.error}`
         }

         cannotReadPropertiesOfNullReadingWidth() {
             scene.createRenderable(-1, () => {
                 screen.fillRect(
                     10,
                     115 * 2 - 10,
                     280,
                     10,
                     4)
             })
             new oops.OOPs().error = 'Cannot read properties of null (reading _width)'
         }
         static error: string

         static outOfProgram () {
             this.error = 'Out of Program'
            scene.createRenderable(-1, () => {
                screen.fillRect(
                    10,
                    115 * 2 - 10,
                    85,
                    10,
                    4)

                screen.print(this.error,
                    10,
                    115 * 2 - 10,
                    1,
                    image.font8)
            })
         }

     }
 }

function issue(): oops.OOPs {
    const Error = new oops.OOPs()
    throw Error
    return Error
}


// console.log(`issue ${issue().cannotReadPropertiesOfNullReadingWidth()}`)
// game.debug = true 