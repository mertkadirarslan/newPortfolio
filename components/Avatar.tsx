interface Props {
    width: number;
    height: number;
}

export const Avatar = ({width, height}: Props) => {
    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src="https://avatars.githubusercontent.com/u/116839550?v=4"
            alt="Mert Kadir"
            className="rounded-full"
            width={width}
            height={height}
        />
    );
};
