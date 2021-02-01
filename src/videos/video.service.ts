import { Injectable } from "@nestjs/common";
import {User, Video } from "src/graphql";
// @ts-ignore
import videoDTO from "./dto/video.dto"

@Injectable()
export  class videoService {
    private readonly videos: Video[] = [];

    findAll(): Video[] {
        return this.videos;
    }

    create(videoDTO: videoDTO): Video {
        const videoID: number = this.videos.length + 1;
        const video: Video = new  Video()

        video.id = videoID.toString()
        video.title = videoDTO.title
        video.url = videoDTO.url

        const author: User = new User();
        author.id = videoDTO.userID
        author.name = "Author " + videoDTO.userID;
        video.author = author;

        this.videos.push(video)

        return video;
    }
}
