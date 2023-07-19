import {
  HeartFilledIcon,
  GitHubLogoIcon
} from '@radix-ui/react-icons'
import { Title, Divider } from '../../components/ui-elements/title'
import { TechnologyCard } from '../../components/ui-elements/box/technology-card'
import { RadixUiSvg, ReactHookFormSvg, ReactQuerySvg, ReactSvg, FramerSvg, TypescriptSvg } from '../../components/logos'
import { TechnologyBox, TechnologyBoxWrapper } from '../../components/ui-elements/box/technology-box'

function About() {
  return (
    <section>
      <TechnologyBoxWrapper>
        <Title>
          Giphy search created with{' '}
          <HeartFilledIcon
            width={40}
            height={40}
            color='red'
          />{' '}
          by{' '}
          <a
            href='https://github.com/amirsinaa/'>
            Panir{' '}
            <GitHubLogoIcon
              width={40}
              height={40}
            />
          </a>{' '}
          with the help of:{' '}
        </Title>
        <Divider></Divider>
        <TechnologyBox>
          <TechnologyCard>
            <a href='https://reactjs.org/'>
              <ReactSvg />
            </a>
          </TechnologyCard>
          <TechnologyCard>
            <a href='https://tanstack.com/query/latest/'>
              <ReactQuerySvg />
            </a>
          </TechnologyCard>
        </TechnologyBox>
        <TechnologyBox>
          <TechnologyCard>
            <a href='https://www.typescriptlang.org'>
              <TypescriptSvg />
            </a>
          </TechnologyCard>
          <TechnologyCard>
            <a href='https://radix-ui.com/'>
              <RadixUiSvg />
            </a>
          </TechnologyCard>
        </TechnologyBox>
        <TechnologyBox>
          <TechnologyCard>
            <div className='text-3xl inline-flex'>
              <a href='https://www.framer.com/motion/'>
                <FramerSvg />
              </a>
            </div>
          </TechnologyCard>
          <TechnologyCard>
            <a href='https://react-hook-form.com/'>
              <ReactHookFormSvg />
            </a>
          </TechnologyCard>
        </TechnologyBox>
        <Divider></Divider>
      </TechnologyBoxWrapper>
    </section>
  );
}

export default About;