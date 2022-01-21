// https://stackoverflow.com/review/late-answers/27812263
// แก้ปันหาเรื่อง Import File SVG

declare module "*.svg" {
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
  }