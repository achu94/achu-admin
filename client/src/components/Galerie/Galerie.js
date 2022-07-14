import { Image, Container } from 'semantic-ui-react'

const src = '/images/wireframe/image.png'

const ImageExampleGroupSize = () => (
    <Container>
        <Image.Group size='small'>
            <Image src={src} />
            <Image src={src} />
            <Image src={src} />
            <Image src={src} />
        </Image.Group>
    </Container>
)

export default ImageExampleGroupSize