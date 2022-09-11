import { SpinnerWrapper, Spinner } from './styles';

export const Loading = () => {
  return (
    <SpinnerWrapper>
      <Spinner
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 90, 180, 180, 0],
          borderRadius: ["5%", "10%", "50%", "50%", "5%"]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 0
        }}
      />
    </SpinnerWrapper>
  )
}