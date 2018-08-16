var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var YouTube = /** @class */ (function () {
    //constructor used for initialize a class filed
    function YouTube(channelTitle, videoTitle, published, views, subscribers) {
        var _this = this;
        this.channelTitle = channelTitle;
        this.videoTitle = videoTitle;
        this.published = published;
        this.views = views;
        this.subscribers = subscribers;
        //getter
        this.getChannelTitle = function () {
            return _this.channelTitle;
        };
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getNumberOfViews = function () {
            return _this.views;
        };
        this.getPublished = function () {
            return _this.published;
        };
        this.getSubscribers = function () {
            return _this.subscribers;
        };
        //Setter
        this.setViews = function (views) {
            return _this.views = views;
        };
        this.setSubscribers = function (subscribers) {
            return _this.subscribers = subscribers;
        };
        //function
        this.playList = function () {
            console.log("save this video to ur favioute playList");
        };
        this.watchLater = function () {
            console.log("click to watch this video later");
        };
        this.channelTitle = channelTitle;
        this.videoTitle = videoTitle;
        if (views) {
            this.views = views;
        }
        else {
            this.views = null;
        }
        this.published = published;
        if (subscribers) {
            this.subscribers = subscribers;
        }
        else {
            this.subscribers = null;
        }
    } // constructor end
    return YouTube;
}()); // class end
var CurrentVideo = /** @class */ (function (_super) {
    __extends(CurrentVideo, _super);
    function CurrentVideo(channelName, videoTitle, views, published, subscribers, likes, disLikes, description, comments) {
        var _this = _super.call(this, channelName, videoTitle, views, published, subscribers) || this;
        _this.channelName = channelName;
        _this.videoTitle = videoTitle;
        _this.published = published;
        _this.likes = likes;
        _this.disLikes = disLikes;
        _this.description = description;
        _this.comments = comments;
        //getter
        _this.getNumberOfLikes = function () {
            return _this.likes;
        };
        _this.getNumberOfDislikes = function () {
            return _this.disLikes;
        };
        _this.getDescription = function () {
            return _this.description;
        };
        _this.getTopComment = function () {
            return _this.comments;
        };
        //Setter
        _this.setTopComment = function (comments) {
            _this.comments = comments;
        };
        //function
        _this.relatedVideos = function () {
            console.log("These are the related Videos list");
        };
        _this.autoPlay = function () {
            console.log("Autoplay to loop all the video on/off");
        };
        _this.share = function () {
            console.log("share this video with ur friend");
        };
        _this.quality = function () {
            console.log("This is high quality video");
        };
        _this.speed = function () {
            console.log("this video will play in normal speed");
        };
        _this.likes = likes;
        _this.disLikes = disLikes;
        _this.description = description;
        _this.comments = comments;
        return _this;
    }
    return CurrentVideo;
}(YouTube));
var Lyrical = new YouTube("Sony", "Inkem Inkem Inkem Kaavaale Lyrical", "03-08-2018");
console.log("simple get all data");
//get data
console.log("Channel Title:" + Lyrical.getChannelTitle());
console.log("Title:" + Lyrical.getVideoTitle());
console.log("Views:" + Lyrical.getNumberOfViews());
console.log("Published on:" + Lyrical.getPublished());
console.log("Subscribers:" + Lyrical.getSubscribers());
//functional call
Lyrical.playList();
Lyrical.watchLater();
console.log("update the views and subscribers");
//update views
Lyrical.setViews(290000);
console.log("updated views", Lyrical.getNumberOfViews());
//update subscribers
Lyrical.setSubscribers("4.2k");
console.log("updated subscribers", Lyrical.getSubscribers());
console.log("another class access");
var CurrentVideoList = new CurrentVideo(Lyrical.getChannelTitle(), Lyrical.getVideoTitle(), Lyrical.getNumberOfViews(), Lyrical.getPublished(), Lyrical.getSubscribers(), 6550000, 13212, "Watch & Enjoy Inkem Inkem Inkem Kaavaale Lyrical Song From Telugu Movie", "super song");
//get data
console.log("Channel Title:" + CurrentVideoList.getChannelTitle());
console.log("Title:" + CurrentVideoList.getVideoTitle());
console.log("Views:" + CurrentVideoList.getNumberOfViews());
console.log("Published on:" + CurrentVideoList.getPublished());
console.log("Subscribers:" + CurrentVideoList.getSubscribers());
console.log("Likes:" + CurrentVideoList.getNumberOfLikes());
console.log("Dislikes:" + CurrentVideoList.getNumberOfDislikes());
console.log("Top-Comment:" + CurrentVideoList.getTopComment());
console.log("Description:" + CurrentVideoList.getDescription());
//functional call
CurrentVideoList.playList();
CurrentVideoList.watchLater();
CurrentVideoList.relatedVideos();
CurrentVideoList.autoPlay();
CurrentVideoList.share();
CurrentVideoList.speed();
CurrentVideoList.quality();
//update comment
CurrentVideoList.setTopComment("awesome lyrical");
console.log("updated Top-Comment:" + CurrentVideoList.getTopComment());
