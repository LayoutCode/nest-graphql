import { IsNotEmpty } from "class-validator";
import { NewVideo } from "src/graphql";


export class videoDTO extends NewVideo {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    url: string;

    @IsNotEmpty()
    userId: string;
}
