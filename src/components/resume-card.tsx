"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

interface ResumeCardProps {
	logoUrl: string;
	altText: string;
	title: string;
	subtitle?: string;
	location?: string;
	href?: string;
	badges?: readonly string[];
	period: string;
	description?: string;
}
export const ResumeCard = ({
	logoUrl,
	altText,
	title,
	subtitle,
	href,
	location,
	badges,
	period,
	description,
}: ResumeCardProps) => {
	const [isExpanded, setIsExpanded] = React.useState(false);

	const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
		if (description) {
			e.preventDefault();
			setIsExpanded(!isExpanded);
		}
	};

	return (
		<>
			<Card className={`flex ${href ? "cursor-pointer" : ""}`}>
				<div className="flex-none">
					<a href={href} className="block" target="_blank" rel="noreferrer">
						<Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
							<AvatarImage
								src={logoUrl}
								alt={altText}
								className="object-contain"
							/>
							<AvatarFallback>{altText[0]}</AvatarFallback>
						</Avatar>
					</a>
				</div>
				<div className="flex-grow ml-4 items-center flex-col group">
					<CardHeader onClick={handleClick}>
						<div className="flex items-center justify-between gap-x-2 text-base">
							<h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
								{title}
								{href && (
									<ChevronRightIcon
										className={cn(
											"size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
											isExpanded ? "rotate-90" : "rotate-0",
										)}
									/>
								)}
							</h3>
							<div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
								{period}
							</div>
						</div>
						{subtitle && <div className="font-sans text-xs">{subtitle}</div>}
						{location && <div className="font-sans text-xs">{location}</div>}
					</CardHeader>
					{description && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{
								opacity: isExpanded ? 1 : 0,

								height: isExpanded ? "auto" : 0,
							}}
							transition={{
								duration: 0.7,
								ease: [0.16, 1, 0.3, 1],
							}}
							className="mt-2 text-xs sm:text-sm"
						>
							{description}
						</motion.div>
					)}
				</div>
			</Card>
		</>
	);
};

function CardContent() {}
