import type { any } from "astro/zod";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let filePath = "./src/assets/images";
let shuffledImages: any = []; // 存储打乱的图片列表
let currentIndex = 0; // 当前索引
let imageFiles: any = []; // 存储所有图片列表
const validExtensions = /\.(jpe?g|png)$/i;

function getAllFiles(filePath: any) {
	imageFiles = [];
	if (fs.existsSync(filePath)) {
		const files = fs.readdirSync(filePath);
		const filteredFileList = files.filter((file) => validExtensions.test(file));
		for (let i = 0; i < filteredFileList.length; i++) {
			let file = filteredFileList[i];
			let currentFilePath = filePath + "/" + file;
			let stats = fs.lstatSync(currentFilePath);
			if (stats.isDirectory()) {
				imageFiles = imageFiles.concat(getAllFiles(currentFilePath));
			} else {
				imageFiles.push("/" + file);
			}
		}
	} else {
		console.warn(`指定的目录${filePath}不存在！`);
	}

	return imageFiles;
}

// 初始化随机图片列表
function initializeShuffledImages() {
	imageFiles = getAllFiles(filePath);
	shuffledImages = [...imageFiles];
	shuffleArray(shuffledImages); // 打乱数组
	currentIndex = 0;
}

// 打乱数组的函数
function shuffleArray(array: any) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

// 获取下一个图片 URL
function getNextImageUrl() {
	if (currentIndex >= shuffledImages.length) {
		initializeShuffledImages(); // 如果当前图片列表用完了，重新初始化并打乱
	}
	return shuffledImages[currentIndex++];
}

// 分配图片 URL 给对象数组
export const assignImagesToObjects = async (objects: any) => {
	initializeShuffledImages();

	let filterObjs = objects.filter((item: any) => !item.data.fixed);
	for (let obj of filterObjs) {
		// 获取新图片路径
		const newImageUrl = getNextImageUrl();
		// 构建后的路径需要考虑到 _astro 目录
		const newImagePath = obj.data.heroImage.src.replace(
			/\/[^\/]+(\.(jpe?g|png))/,
			`${newImageUrl}`,
		);

		obj.data.heroImage.src = newImagePath;
	}
};
