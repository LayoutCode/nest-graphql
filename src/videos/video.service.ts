import { Injectable } from "@nestjs/common";
import {User, Video } from "src/graphql";
import { VideoDTO } from "./dto/video.dto"

@Injectable()
export  class VideoService {
    private readonly videos: Video[] = [];

    findAll(): Video[] {
        return this.videos;
    }

    create(VideoDTO: VideoDTO): Video {
        const videoID: number = this.videos.length + 1;
        const video: Video = new  Video()

        video.id = videoID.toString()
        video.title = VideoDTO.title
        video.url = VideoDTO.url

        const author: User = new User();
        author.id = VideoDTO.userId;
        author.name = "Author " + VideoDTO.userId;
        video.author = author;

        this.videos.push(video)

        return video;
    }
}
