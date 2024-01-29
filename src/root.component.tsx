import { AppButton } from "@octosoft/styleguide";

export default function Root(props) {
  return (
    <section>
      {props.name} is mounted!
      <h1 className="my-8 text-center">This is the Dashboard Page</h1>
      <AppButton>Button</AppButton>
    </section>
  );
}
