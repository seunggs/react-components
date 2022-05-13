# React Components for Sidetrek

## Local testing setup (the order is important!)
* In the project root dir, run: `npm link`
* Move into the testing app dir and then run: `npm link @sidetrek/react-components`
* To undo (the order is again important!):
  * In the project root dir, run: `npm unlink`
  * Move into the testing app dir and then run: `npm unlink @sidetrek/react-components`

## Local testing
* Run `npm run dev` to run a local react app to test the components before publish
* If library is added, run `npm run build`

## To publish
1. Push all changes to github
2. Run `npm run release`