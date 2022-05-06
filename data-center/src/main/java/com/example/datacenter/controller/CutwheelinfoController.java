package com.example.datacenter.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.example.datacenter.model.domain.Culturepurchase;
import com.example.datacenter.model.domain.Cutwheelinfo;
import com.example.datacenter.model.domain.request.CulturepurchaseRequest;
import com.example.datacenter.model.domain.request.CutwheelinfoRequest;
import com.example.datacenter.service.CulturepurchaseService;
import com.example.datacenter.service.CutwheelinfoService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;

/**
 * @author YanPAN
 * @create 2022-05-05 11:02
 */

@RestController
@RequestMapping("/cutwheelinfo")
public class CutwheelinfoController {

    @Resource
    private CutwheelinfoService cutwheelinfoService;


    @PostMapping("/add")
    public String addCutwheelinfo(@RequestBody CutwheelinfoRequest cutwheelinfoRequest) {
        Cutwheelinfo cutwheelinfo = new Cutwheelinfo();
        cutwheelinfo.setCheeseWheelID(cutwheelinfoRequest.getCheeseWheelID());
        cutwheelinfo.setCheeseBatchCode(cutwheelinfoRequest.getCheeseBatchCode());
        cutwheelinfo.setCheeseWheelWeight(cutwheelinfoRequest.getCheeseWheelWeight());
        cutwheelinfo.setCreateTime(new Date());
        cutwheelinfo.setUpdateTime(new Date());
        cutwheelinfo.setIsDelete(0);

        boolean save = cutwheelinfoService.save(cutwheelinfo);
        if (!save) {
            return "null,";
        }
        return cutwheelinfo.getCheeseWheelID();
    }

    @PostMapping("/update")
    public String updateCutwheelinfo(@RequestBody CutwheelinfoRequest cutwheelinfoRequest) {

        String orderID = cutwheelinfoRequest.getCheeseWheelID();
        if (orderID==null){
            return "null";
        }
        Cutwheelinfo cutwheelinfo = new Cutwheelinfo();
        cutwheelinfo.setCheeseWheelID(cutwheelinfoRequest.getCheeseWheelID());
        cutwheelinfo.setCheeseBatchCode(cutwheelinfoRequest.getCheeseBatchCode());
        cutwheelinfo.setCheeseWheelWeight(cutwheelinfoRequest.getCheeseWheelWeight());
        cutwheelinfo.setCreateTime(new Date());
        cutwheelinfo.setUpdateTime(new Date());
        cutwheelinfo.setIsDelete(0);

        cutwheelinfoService.saveOrUpdate(cutwheelinfo);
        return cutwheelinfo.getCheeseWheelID();
    }

    @GetMapping("/search")
    public List<Cutwheelinfo> searchCutwheelinfo(String id, HttpServletRequest request) {
        QueryWrapper<Cutwheelinfo> queryWrapper = new QueryWrapper<>();
        if (StringUtils.isNotBlank(id)) {
            queryWrapper.like("CheeseWheelID", id);
        }
        return cutwheelinfoService.list(queryWrapper);
    }

    @PostMapping("/delete")
    public void deleteCutwheelinfo(@RequestBody CutwheelinfoRequest request) {
        Cutwheelinfo cutwheelinfo = new Cutwheelinfo();
        cutwheelinfo.setCheeseWheelID(request.getCheeseWheelID());
        cutwheelinfoService.removeById(cutwheelinfo);
    }
}
