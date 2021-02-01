import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { Video } from "src/graphql";
import { VideoService } from "./video.service"
import { VideoDTO } from "./dto/video.dto";

@Resolver('Video')
export class VideoResolvers {
    constructor(private readonly videoService: VideoService ) {}

    @Query()
    async videos() {
        return this.videoService.findAll()
    }
    @Mutation('createVideo')
    async create(@Args('input') args: VideoDTO): Promise<Video>{
        return await this.videoService.create(args);
    }
}
