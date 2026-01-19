"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
// 👇 Імпортуємо функцію, яка знає про всі наші регіони
import { getAllRegions } from "@/data/regions";

interface RegionSwitcherProps {
  currentRegion: string;
}

export function RegionSwitcher({ currentRegion }: RegionSwitcherProps) {
  // 1. Отримуємо список всіх доступних регіонів з конфігу
  const regions = getAllRegions();

  // 2. Знаходимо повну назву поточної країни (наприклад, "ie" -> "Ireland")
  // Якщо раптом не знайшли, показуємо просто код великими літерами
  const currentRegionName = regions.find(r => r.code === currentRegion)?.name || currentRegion.toUpperCase();

  // Функція для виводу прапора
  const FlagIcon = ({ code }: { code: string }) => (
    <img 
      src={`/images/flags/${code}.svg`} 
      alt={`${code} flag`} 
      className="w-5 h-5 rounded-full object-cover shadow-sm border border-gray-100"
    />
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2 rounded-full pl-2 pr-3 bg-white hover:bg-gray-50 border-gray-200 transition-all">
          <FlagIcon code={currentRegion} />
          <span className="hidden sm:inline-block text-sm font-medium text-gray-700">
            {currentRegionName}
          </span>
          <ChevronDown className="w-4 h-4 text-gray-400 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-[200px]">
        
        {/* 3. Генеруємо пункти меню автоматично на основі списку регіонів */}
        {regions.map((region) => (
          <DropdownMenuItem key={region.code} asChild>
            <Link 
              href={`/${region.code}`} 
              className="flex items-center gap-3 cursor-pointer w-full font-medium"
            >
              <FlagIcon code={region.code} />
              <span className={currentRegion === region.code ? "font-bold text-gray-900" : "text-gray-700"}>
                {region.name}
              </span>
              {currentRegion === region.code && (
                <span className="ml-auto text-xs text-green-600">●</span>
              )}
            </Link>
          </DropdownMenuItem>
        ))}

      </DropdownMenuContent>
    </DropdownMenu>
  );
}